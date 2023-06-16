const fileUpLoad = async (image) => {
  const cloudName = "dspyfujx0";
  const presetName = "redux-firebase-cloudinary-front4";
  const urlCloudinary = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", presetName);
  formData.append("cloud_name", cloudName);

  try {
    const response = await fetch(urlCloudinary, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fileUpLoad;
