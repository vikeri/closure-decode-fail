goog.require("goog.crypt.base64");
function testDecode() {
  var decode = goog.crypt.base64.decodeString;
  var res = decode("SGVsbG8=");
  console.log(res);
  var res2 = decode(null);
  console.log(res2);
}
