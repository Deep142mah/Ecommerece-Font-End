const crypto = require('crypto');
const axios = require('axios');

const clientId = 'CF183145CHETR9BU1CRS8EP3NPH0';
const clientSecret = 'dfd3fbe5fc715a3b1788aa2b62a80a6f2c627b83';
const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArD27fKLMD/X/56NE1kCI
ooa3Zgr7QxIqWpSTq6xOfgYXUNEKPOS/gigi/enEkbxvL0cbxpjZefy/iCZqchXx
1EsZmYdEm+Uov4mmDzTFU79+OvdKE50Fm9l3FIiSrHgxtyVDxTGLIRSGsBpYnl7m
VPQh3xXVrXGMNv9PCW05agAB+e7Xq0iDyAmqYMfg9QTuZIs6sLtMLW7mYOG2boDe
qtAxL5jGzM25yS4JT+ycCMzVlAw/2Rumhd0C4SPLOfinU//itweqEe761udes+DL
9h0OSgNYJyH0BG6MyrA5zJ1Tr+/vvbxns7cTXG1tAwYiH8w0SjWa2rC8sx6Kj7JU
pwIDAQAB
-----END PUBLIC KEY-----`;
const apiUrl = 'https://payout-api.cashfree.com/payout/v1/authorize';

async function generateSignature() {
 
  const timestamp = Math.floor(Date.now() / 1000);

  
  const data = `${clientId}.${timestamp}`;

  
  const buffer = Buffer.from(data, 'utf8');
  const encrypted = crypto.publicEncrypt(publicKey, buffer);

  
  const signature = encrypted.toString('base64');
console.log(signature)
  return signature;
}

const makeRequest = async () => {
  try {
    const signature = await generateSignature();

    
    await axios.post(apiUrl, {
   
    }, {
      headers: {
        'X-Cf-Signature': signature,
        'X-Client-Id': clientId,
        "X-Client-Secret":clientSecret
      },
    }).then((res) => {
      // BankVerification(res)
      UPIVerification(res)
      // IFSCVerification(res)
      // DirectTransfer(res)
      console.log(res,"resresresre")
      return res
      })
  } catch (error) {
    console.error(error);
  }
}

makeRequest();

// console.log(data)
const BankVerification = async (resdata) => {
  const data = {
    bankAccount:"026291800001191",
    ifsc:"YESB0000262"
  }

  const options = {
    method: 'GET',
    url: `https://payout-api.cashfree.com/payout/v1.2/validation/bankDetails?bankAccount=${data.bankAccount}&ifsc=${data.ifsc}`,
    headers: {accept: 'application/json',Authorization:'Bearer '+resdata.data.data.token},
  };
 
  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

const UPIVerification = async (resdata) => {
  const data = {
    vpa:"9098341017@apl",
  }
  const options = {
    method: 'GET',
    url: `https://payout-api.cashfree.com/payout/v1/validation/upiDetails?vpa=${data.vpa}`,
    headers: {accept: 'application/json',Authorization:'Bearer '+resdata.data.data.token},
  };
 
  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

const IFSCVerification = async (resdata) => {
  const data = {
    ifsc:"YESB0000262",
  }
  const options = {
    method: 'GET',
    url: `https://payout-api.cashfree.com/payout/v1/ifsc/${data.ifsc}`,
    headers: {accept: 'application/json',Authorization:'Bearer '+resdata.data.data.token},
  };
 
  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

const DirectTransfer = async (resdata) => {
  const data = {
    amount:"",
    transferId:"",
    transferMode:"",
    beneDetails:{
      name:"",
      phone:"",
      email:"",
      address1:""
    }
  }
  const options = {
    method: 'GET',
    url: `https://payout-api.cashfree.com/payout/v1/ifsc/${data.ifsc}`,
    headers: {accept: 'application/json',Authorization:'Bearer '+resdata.data.data.token},
  };
 
  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}