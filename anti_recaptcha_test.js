//npm install @antiadmin/anticaptchaofficial
//npm install puppeteer

const ac = require("@antiadmin/anticaptchaofficial");
// const pup = require("puppeteer");
var request = require("request");
var express = require("express");
var app = express();
const { body, validationResult } = require("express-validator");
// const Captcha = require("2captcha");

// // ac.setAPIKey('59b38e5ccd9f0d4775783b8a7138235f');
// // ac.getBalance()
// //     .then(balance => console.log('my balance is: '+balance))
// //     .catch(error => console.log('an error with API key: '+error));

// const solver = new Captcha.Solver("e8cad69cc5a1e2a4b71697de296f6b75");
// solver
//   .recaptcha(
//     "6LeqRk4cAAAAABZ4SsS_WxYTxazfNfcb0fzY5rc2",
//     "https://www.telkomsel.com/shops/voucher/redeem"
//   )
//   .then((res) => {
//     console.log('2CAPTCHA',res);
//   });

  
(async () => {
  async function reedemVoucher(noTsel, kodeVcr) {
   
    console.log("solving recaptcha ...");
    let token = "";
    // token = await ac.solveRecaptchaV2Proxyless('https://www.telkomsel.com/shops/voucher/redeem', '6LeqRk4cAAAAABZ4SsS_WxYTxazfNfcb0fzY5rc2');
    // if (!token) {
    //     console.log('something went wrong');
    //     return;
    // }

    // console.log("opening browser ..");
    // const browser = await pup.launch();

    // console.log("creating new tab ..");
    // const tab = await browser.newPage();

    // console.log("changing window size .. ");
    // await tab.setViewport({ width: 1360, height: 1000 });

    //   console.log("opening target page ..");
    //   await tab.goto("https://www.telkomsel.com/shops/voucher/redeem", {
    //     waitUntil: "networkidle0",
    //   });

    //   console.log("filling noTsel input ..");
    //   await tab.$eval(
    //     "#inputNumber",
    //     (element, noTsel) => {
    //       element.value = noTsel;
    //     },
    //     noTsel
    //   );

    //   console.log("filling kodeVcr input");
    //   await tab.$eval(
    //     "#mat-tab-content-0-0 > div > div > voucher-redeem-template > div > voucher-form > div > form > div:nth-child(5) > input",
    //     (element, kodeVcr) => {
    //       element.value = kodeVcr;
    //     },
    //     kodeVcr
    //   );

    // console.log('setting recaptcha g-response ...');
    // await tab.$eval('#g-recaptcha-response', (element, token) => {
    //     element.value = token;
    // }, token);

    // console.log('submitting form .. ');
    // await Promise.all([
    //     tab.click('#mat-tab-content-0-0 > div > div > voucher-redeem-template > div > voucher-form > div > form > button'),
    //     tab.waitForNavigation({ waitUntil: "networkidle0" })
    // ]);

    // console.log("making a screenshot ...");
    // await tab.screenshot({ path: "screenshot.png" });

    // console.log("closing browser .. ");
    // await browser.close();

    var options = {
      method: "POST",
      url: "https://www.telkomsel.com/api/voucher/redeem",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.7",
        Connection: "keep-alive",
        "Content-type": "application/json",
        Origin: "https://www.telkomsel.com",
        Referer: "https://www.telkomsel.com/shops/voucher/redeem",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Sec-GPC": "1",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
        "device-id": "cb33937b-76a5-4239-a1ba-a124987886d4",
        "sec-ch-ua":
          '"Brave";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "x-url-payload": "T7To2wtSwlyjy6UORZC0Iw==",
      },
      body: JSON.stringify({
        hrn: kodeVcr,
        msisdn: noTsel,
        "no-captcha": true,
        voucher_type: "voucher",
        recaptcharesponse:
          token ||
          "03AEkXODDDTSpVQ3elEfxBddn7X4kutfn8uuD3ddbSC0YbSn3NDcjicok3ypXUBmVXJ9tBjonU1U36fMIPbs5u0BaciWtJIEC_yG-3E6UUAVc5E7zhmHeW2p7f3EbvkA6FcoLMcvvpnRkSQT21RwTUK1_Y-iNd7E5MezrVVajFfeXgyvOfTlp2o-4GSFZ6yH8vHXLP63BP46OtR5HJBC4ccBNTJggPAF4NJ9ABveJB9S89MModdtN6T0Kl5LohyPEce-c5vnpD1omGUW8UM6Nd3iH0VxbhkuUPisqvFmYM0Cqiet1DiYHutZXvF_9_YacIunH2cEqbZdz0W1iJB-BxRfU2jZ6zUvJu7XEEJsd0ID74Qkex9ByBcm09eMg6GglKrRDREA568oCmulLpX6_dE7gt0Op7MNC1Y71pwa4F6DilyayLDu4ZJf_M9LXMcXk9xTR0rlfxujfPDpNyAU8tTydaLLitZaxyv8Uq1PEbigJRntKoWYWH1zX1ycNkOOcCP3PeRurAJ8llqumPfwsNQdRQ1WcvHdGJ_g",
      }),
    };

    return new Promise(function (resolve, reject) {
      request(options, function (error, res, body) {
        resolve(JSON.parse(body));
        return body;
        // if (!error && res.statusCode === 200) {
        //   resolve(body);
        // } else {
        //   reject(error);
        // }
      });
    });
  }

  app.use(require("body-parser").urlencoded({ extended: false }));
  app.post(
    "/",
    body("noTsel")
      .isLength({ min: 12 })
      .withMessage("Minimal 12 Karakter menggunakan 62"),
    body("kodeVcr").isLength({ min: 11 }).withMessage("Minimal 11 Karakter"),
    async function (req, res) {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      let response = await reedemVoucher(req.body.noTsel, req.body.kodeVcr);
      res.json(response);
    }
  );

  app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
})();
