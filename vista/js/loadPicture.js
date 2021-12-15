import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-storage.js";

const storage = getStorage(app);
const storageRef = ref(storage);

const onFileChange = (e) =>{
    let file = e.target.files[0];
    let fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() =>{
        console.log("photo uploaded");
    })
}

$("#imgInput").attr("accept","image/*");
$("#imgInput").attr("onChange",{onFileChange});