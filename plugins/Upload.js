import url from './url'

export default class Upload {


    static select() {

        return new Promise((a, b) => {
            uni.chooseImage({
                success: chooseImageRes => {
                    const tempFilePaths = chooseImageRes.tempFilePaths;
                    a(tempFilePaths[0]);
                },
                fail: () => {
                    b();
                }
            });
        })

    }

    static send(file) {
        return new Promise((a, b) => {
            uni.uploadFile({
                url: url.uploadUrl + "/file/upload", //仅为示例，非真实的接口地址
                filePath: file,
                name: "file",
                success: uploadFileRes => {
                    a(JSON.parse(uploadFileRes.data));
                },
                fail: () => {
                    b();
                }
            });
        })
    }


}

