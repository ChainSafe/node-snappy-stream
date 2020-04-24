var crc32c = require('fast-crc32c').calculate

module.exports = function (value) {
      var x = crc32c(value)
      var result = new Buffer(4)


      var input = (((x >> 15) | (x << 17)) + 0xa282ead8) % 4294967296

      // don't assert the size, since we're only interested in the parts that
      // are within the UInt32LE-size
      result.writeUInt32LE(input, 0)

      return result
    }