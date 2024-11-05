const crypto = require("crypto");

const alicePublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmAMR/QPjCeGfkRM4V2xq
vdav09/GfGf1urAdJmW3PlK3R26ntckMXc6ecqJYZQkwmBFLqUHiWu5f9FtVbIQz
RUBjlFKcCjGJEHC2+4s2+TGcYR27cFKY/FhONUXbBMl1paOl6W1YJzK1cT7UYqzA
F+pzjX21KfSw57jacvaBxnu4QFf4yx4OVUGtuH9GoiRUD7zMZsyk4oy8WrgMdlNS
iVD48B7iQbcW/T6j/45KKDARW8HXNW2zFk+HaXkWb+cF5c37dKusuM9uiSZmLUZ5
d1ndFPcAFHvy33HClaotq40O6G1ZbAmYUHq0mRc5v7jD8j0ttkavmO7RKyBu6VDo
WwIDAQAB
-----END PUBLIC KEY-----`;
const alicePublicKey = crypto.createPublicKey(alicePublicKeyPem);

const alicePrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCYAxH9A+MJ4Z+R
EzhXbGq91q/T38Z8Z/W6sB0mZbc+UrdHbqe1yQxdzp5yolhlCTCYEUupQeJa7l/0
W1VshDNFQGOUUpwKMYkQcLb7izb5MZxhHbtwUpj8WE41RdsEyXWlo6XpbVgnMrVx
PtRirMAX6nONfbUp9LDnuNpy9oHGe7hAV/jLHg5VQa24f0aiJFQPvMxmzKTijLxa
uAx2U1KJUPjwHuJBtxb9PqP/jkooMBFbwdc1bbMWT4dpeRZv5wXlzft0q6y4z26J
JmYtRnl3Wd0U9wAUe/LfccKVqi2rjQ7obVlsCZhQerSZFzm/uMPyPS22Rq+Y7tEr
IG7pUOhbAgMBAAECggEAQOG6mVBB5TNQnKbj+uiTDNEn/hp6yRnEV/kYkA2FL4w1
nz8bRSt5ZEau+YXSjdlkzNtA/I7a8u3gtdcP+H/atFm9xw6VfIJVGtfJOkda4PTs
ZsU+fjw7ASYdx3438+ybEuZtB9t8b0qlCB+FnlJWsT6IMKGxpCVFJrqPPtd5X8JB
YPdKgfLEQPpNrrGvtSYS7DCXEu/EUqfH/TCA9gxEl+mVuyLav6xmSV3zZPxZcHF4
uTh6XtcIRA2KLpDyiAWKJLlEIXvsC33jDxyqRP2KQJbXWqO/TaCNXm+Fp/51VhCA
/dagUV2wBniceg4s+M61XpnHYnSPNlBnRLk42rn5aQKBgQDIOMmY7WsRh2NbFaS6
Ahj9oOf2NutpMHlkFeTciNVxHx2+PXVM8uMKYayZh9/WtkhTGytWWppRz7MdRkh3
tcKpqETZHEdW4xeobZ0SqWi02JVeDaZCRw/vsotQ9JGBfLOe+BzK27tLIPOkzv1S
9tl6nJYxuHnPOV2SK10+HtKIqQKBgQDCXBqal1nbGH8kYydLAzTfZHis1+QPCQo/
HYI5Wod/cVPowmhLhoZsdQVOVWamnWQcU7Hy6ni/j9rg3QavdPxHPl6MIRGMJIZo
iNbl+tU2oyQrjNlbKjyXl0qXd6o4dACOanMV2wH8OhsaN2n8Brf+9+rv2ppR9BUc
FWgbK5P3YwKBgQDGDLYNGTuBWUSEQoJwo8aIivMn7ucpY5OP1sBNDOTkQn0vQqeW
9+Jw0HDkZSyavDAKVKOnhXOEXUi1OmJQV3A4VYPUpk5Cudsa9WIbpYs2583H/QRq
JtSyqw93gpOzW+Bo7M++MV+wTuXyLfUSba5txBolEG8c9YeDIHXZDq/+EQKBgCA8
kpUNgXPbjksEvyGr+HsM+Q8CB+uOfkqVpGHK6Cp1K4uxowbT2zvl9OlXNN1xwYcJ
Qryds0VioNUnE9LKPoW6jIgFfBmYfUqdV7dxcSfMy1UF2Y9LZB1olJCm4m7WnrkA
YvI/Dwc8w/4HLucEXkRF7ou14F6zc0TjMA9BnRstAoGBALpk4CMpmU32o3fYUD+h
rSB6kFLQAjPcJH8t2VK1+UycC141oDYKVVGwATum8iF2NZcMb9Sl6iLU5bd+1YsJ
Re+Uvk9530+HmLqP26AQYxOnHxFkckfJs704/ByWh+K7TzyVoBjA2mX8IUlHK8TJ
Toxqi34/xz3U4uhOzu6u5SQp
-----END PRIVATE KEY-----`;
const alicePrivateKey = crypto.createPrivateKey(alicePrivateKeyPem);

const bobPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5z8TpJNgTlcm0k+e9ZT/
rT/920lgolRwO0+iy7yqRXAZDjxELpehQTLsQtaJ/UlXVwOwH0Zfz74SPM7EuJp/
iZRYehJ1ifdLsukm0qOcIJrjKJFmy+QGydLlbHX457kecKlTeqqrG0ekkLvHyKZk
9HbqUC/XKuwwiws/pKoZaeAZzrTgbJLJ5jeMgS0ADgUdZ8A8CA1c3pzmyzm+RU2t
YMzEhAvKygo7kukIH7+6myeWoBYRBpVwNqlKN72rkZ32u3mVNFLS063mKbDvzCN5
hWavMaLR0Dr5/H8UJGVQHybyPyAp/m/TaacZhv8dz+yzEbbrKEV0AYVSPGtZJa3Z
AQIDAQAB
-----END PUBLIC KEY-----`;
const bobPublicKey = crypto.createPublicKey(bobPublicKeyPem);

const message = "I like eating books and reading apples";
console.log("Message:", message);

const data = Buffer.from(message);
const signature = crypto.sign("sha256", data, alicePrivateKey);
console.log("Signature:", signature.toString("hex"));

const ciphertext = crypto.publicEncrypt(bobPublicKey, data);
console.log("Ciphertext:", ciphertext.toString("hex"));