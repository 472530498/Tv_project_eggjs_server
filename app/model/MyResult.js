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
    constructor(resultCode, resultMsg, Data) {
        this.resultCode = resultCode
        this.resultMsg = resultMsg
        this.Data = Data
    }

    getResult() {
        return {
            resultCode: this.resultCode,
            resultMsg: this.resultMsg,
            Data: this.Data
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

    setData(Data) {
        this.Data = Data
        return this
    }
}

// module.exports = {
//     constructor(resultCode, resultMsg, Data) {
//         this.resultCode = resultCode
//         this.resultMsg = resultMsg
//         this.Data = Data
//     },
//
//     getResult() {
//         return {
//             resultCode: this.resultCode,
//             resultMsg: this.resultMsg,
//             Data: this.Data
//         }
//     },
//
//     setResultCode(resultCode) {
//         this.resultCode = resultCode
//         return this
//     },
//
//     setResultMsg(resultMsg) {
//         this.resultMsg = resultMsg
//         return this
//     },
//
//     setData(Data) {
//         this.Data = Data
//         return this
//     }
// }
