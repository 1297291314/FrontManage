import CryptoJS from 'crypto-js'

const SECRET_KEY = 'HX'

const setSecretKey = (obj) => {
	const secretKey = { val: CryptoJS.AES.encrypt(JSON.stringify(obj), SECRET_KEY).toString() }
	localStorage.setItem('key-value', JSON.stringify(secretKey))
}

const getSecretKey = () => {
	const val = localStorage.getItem('key-value')

	if (!val) {
		return {}
	}

	const secretKey = JSON.parse(val)
	return JSON.parse(CryptoJS.AES.decrypt(secretKey.val, SECRET_KEY).toString(CryptoJS.enc.Utf8))
}

const SECRET_KEY_OBJECT = getSecretKey()

const remove = function () {
	for (let i = 0; i < arguments.length; i++) {
		const key = SECRET_KEY_OBJECT[arguments[i]] || arguments[i]
		localStorage.removeItem(key)
	}
}

const clear = () => {
	localStorage.clear()
}

const set = (key, value, encrypt = false) => {
	let val = value
	let KEY = key

	if (encrypt) {
		val = CryptoJS.AES.encrypt(JSON.stringify(value), SECRET_KEY).toString()
		KEY = CryptoJS.AES.encrypt(key, SECRET_KEY).toString()
		SECRET_KEY_OBJECT[key] = KEY
		setSecretKey(SECRET_KEY_OBJECT)
	}

	const item = { val }
	localStorage.setItem(KEY, JSON.stringify(item))
}

const get = (key, encrypt = false) => {
	const KEY = encrypt ? SECRET_KEY_OBJECT[key] : key
	const val = localStorage.getItem(KEY)

	if (!val) {
		return ''
	}

	const item = JSON.parse(val)
	let result = item.val
	try {
		result = encrypt
			? JSON.parse(CryptoJS.AES.decrypt(result, SECRET_KEY).toString(CryptoJS.enc.Utf8))
			: result
	} catch (err) {
		console.warn(err)
		result = null
	}
	return result
}

const ifSecretKey = (key) => {
	return Object.prototype.hasOwnProperty.call(SECRET_KEY_OBJECT, key)
}

export default {
	remove,
	clear,
	set,
	get,
	ifSecretKey
}
