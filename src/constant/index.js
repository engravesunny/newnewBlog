import { computedSha256 } from '../utils/computedSHA256'

export const baseURL = 'https://cdn.jsdelivr.net/gh/engravesunny/CDN'
export const imgBaseURL = 'http://kecat.top/images/'
export const token = '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'
export const username = 'engravesunny'

const maskId = "K3xkYhOJwAanmd6k"
const accessKey = "pHbhn8iryYNdInZnez9lgc1zlKYby2U7"
const nonce = "1234"
const timestamp = Date.now()
const secretKey = '8ve4IXsaeDQeS1z389gi2bT7AdBgy7WH'
const string = `accessKey=${accessKey}&nonce=${nonce}&secretKey=${secretKey}&timestamp=${timestamp}`
console.log(string);
const sign = computedSha256(string)

export const myInfo = {
    maskId,
    accessKey,
    nonce,
    timestamp,
    sign
}