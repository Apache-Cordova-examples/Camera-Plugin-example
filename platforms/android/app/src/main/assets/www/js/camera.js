var app = {
	image: null,
	imgOptions: null,

	initialize: function () {
		document.addEventListener("DOMContentLoaded", this.onDeviceReady, false);
	},

	onDeviceReady: function () {
		document.querySelector("#btn").addEventListener("click", app.callCamera);
		document.querySelector("#btn2").addEventListener("click", app.callCamera2);
		app.image = document.querySelector("#image");
	},
	//take new pic
	callCamera: function () {
		app.imgOptions =
		{
			quality: 100,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			allowEdit: false,
			encodingType: Camera.EncodingType.JPEG,
			mediaType: Camera.MediaType.PICTURE,
			targetWidth: 400,
			targetHeight: 400,
			cameraDirection: Camera.Direction.BACK,
			correctOrientation: true,
			saveToPhotoAlbum: true
		};
		navigator.camera.getPicture(app.imgSuccess, app.imgFail, app.imgOptions);
	},
	//upload existing pic
	callCamera2: function () {
		app.imgOptions = {
			quality: 100,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			allowEdit: false,
			targetWidth: 400,
			targetHeight: 400,
			encodingType: Camera.EncodingType.JPEG,
			correctOrientation: true,
			mediaType: Camera.MediaType.PICTURE
		};
		navigator.camera.getPicture(app.imgSuccess, app.imgFail, app.imgOptions);
	},

	imgSuccess: function (imageData) {
		app.image.src = "data:image/jpeg;base64," + imageData;
		//clear memory in app
		navigator.camera.cleanup();
	},

	imgFail: function (msg) {
		//alert("Failed to get image: " +  msg);
	}

};

app.initialize();

