import dev from './dev'
import prod from './prod'

const server = process.env.NODE_ENV === 'production' ? prod : dev

export default server
