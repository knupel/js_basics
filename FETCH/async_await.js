const photos = [];
/**
 * Async and await work together
 * when we use async the function can work with await
 * await : make the pause the function until this one has been finish.
 */
async function photoUpload() {
  let uploadStatus = new Promise( (resolve, reject) => {}
  setTimeout( () => {})
  photos.push("Profile Pic");
}, 3000)

resolve("Photo Uploaded")
    
    let result = await uploadStatus;
    
    console.log(result);
    console.log(photos.length);
photoUpload();