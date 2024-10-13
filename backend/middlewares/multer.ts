import multer from "multer"
const storage = multer.memoryStorage()
const uploads = multer({
    storage:storage,
    limits: {
        fileSize: 5*1024*1024,//5mb

    }
})
export default uploads