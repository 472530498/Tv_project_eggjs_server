// class MyResult {
//     constructor(resultCode, resultMsg, Data) {
//         this.resultCode = resultCode
//         this.resultMsg = resultMsg
//         this.Data = Data
//     }
//
//     getResult() {
//         return {
//             resultCode: this.resultCode,
//             resultMsg: this.resultMsg,
//             Data: this.Data
//         }
//     }
//
//     setResultCode(resultCode) {
//         this.resultCode = resultCode
//         return this
//     }
//
//     setResultMsg(resultMsg) {
//         this.resultMsg = resultMsg
//         return this
//     }
//
//     setData(Data) {
//         this.Data = Data
//         return this
//     }
// }

module.exports = class MyResult {
    constructor(resultCode, resultMsg, data) {
        this.resultCode = resultCode
        this.resultMsg = resultMsg
        this.data = data
    }

    getResult() {
        return {
            resultCode: this.resultCode,
            resultMsg: this.resultMsg,
            data: this.data
        }
    }

    setResultCode(resultCode) {
        this.resultCode = resultCode
        return this
    }

    setResultMsg(resultMsg) {
        this.resultMsg = resultMsg
        return this
    }

    setData(data) {
        this.data = data
        return this
    }
}
