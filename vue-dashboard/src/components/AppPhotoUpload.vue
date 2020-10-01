<template>
  <div>
    <div class="text-h2 my-10">File input</div>

    <v-file-input
      v-model="photosToUpload"
      show-size
      multiple
      label="Select photos to upload"
      outlined
      @change="selectPhotos"
    >
      <template v-slot:selection="{ text }">
        <v-chip small label color="primary">
          {{ text }}
        </v-chip>
      </template>
    </v-file-input>

    <v-progress-linear
      v-if="photosToUpload && photosToUpload.length > 0"
      v-model="uploadProgress"
      height="25"
    >
      <strong>{{ uploadProgress }}%</strong>
    </v-progress-linear>

    <div v-if="photosToUpload && photosToUpload.length > 0">
      <v-btn
        class="mt-5"
        color="primary"
        :disabled="uploading"
        @click="demoUpload"
        >Upload</v-btn
      >
    </div>
    Pictures: {{ pictures }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      photosToUpload: [],
      uploading: false,
      pictures: [],
      uploadProgress: 0,
      cloudinary: {
        uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET,
        apiKey: process.env.CLOUDINARY_API_KEY,
        cloudName: process.env.CLOUDINARY_NAME,
      },
    };
  },
  methods: {
    upload() {
      if (!this.photosToUpload || this.photosToUpload.length === 0) return;

      this.uploading = true;

      const self = this;

      function uploadPhoto(file) {
        const clUrl = `https://api.cloudinary.com/v1_1/${self.cloudinary.cloudName}/upload`;
        const reader = new FileReader();
        reader.addEventListener(
          "load",
          function() {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", self.cloudinary.uploadPreset);
            formData.append("tags", "ecommerce-product");
            const requestObj = {
              url: clUrl,
              method: "POST",
              data: formData,
              onUploadProgress: function(progressEvent) {
                self.uploadProgress = Math.round(
                  (progressEvent.loaded * 100.0) / progressEvent.total
                );
              },
            };

            axios(requestObj)
              .then((response) => {
                self.pictures.push({
                  url: response.data.secure_url,
                  name: response.data.original_filename,
                  publicId: response.data.public_id,
                });

                // remove file from upload queue to prevent reupload
                const fName =
                  response.data.original_filename +
                  "." +
                  response.data.original_extension;
                const idx = self.photosToUpload.findIndex(
                  (i) => i.name === fName
                );
                if (idx > -1) {
                  self.photosToUpload.splice(idx, 1);
                }
              })
              .catch((error) => {
                console.log(error);
              })
              .finally(() => {
                self.uploading = false;
              });
          },
          false
        );

        reader.readAsDataURL(file);
      }

      // call for file read if there is a file
      if (this.photosToUpload && this.photosToUpload.length > 0) {
        [].forEach.call(this.photosToUpload, uploadPhoto);
      }
    },
    demoUpload() {
      this.photosToUpload.map((photo) => {
        console.log(photo);
        this.pictures.push(photo.name);
      });
    },
  },
};
</script>
