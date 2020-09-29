var express = require('express')

const app = express();
const cors = require('cors')

const path = require('path')
const PORT = process.env.PORT || 5000
app.use(cors())
require('dotenv/config');

 const Cliente = require('./db');





var data = new Date();
var dia     = data.getDate();           // 1-31
var mes     = 1 +data.getMonth();          // 0-11 (zero=janeiro) 
var ano4    = data.getFullYear();  
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();   




console.log(process.env.CLEARDB_DATABASE_URL);





var dadoss = 
    {
        nome: '',
        email: '',
        telefone: '',
        estado: '',
        cidade: '',
        whatsapp: '',
        emailbox: ''
}


const  nome= ''
       




app.use(express.json());



app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get("/", (req, res) =>{res.render('pages/index.ejs')});



app.post("/", (req, res ) =>{
   
  
 res.send("OK");





 dadoss =  req.body;

 name = dadoss.dados.nome;
 email1 = dadoss.dados.email;
 console.log(name);


 if(!name==''){

    email(dadoss.dados.nome,dadoss.dados.email,dadoss.dados.telefone,
        dadoss.dados.estado,dadoss.dados.cidade,dadoss.dados.whatsappBox,dadoss.dados.emailbox);

       const resultado = dadoss.dados.nome.split(" ", 1);
      
       if(dadoss.dados.emailbox=="SIM"){

           emailCliente(resultado,dadoss.dados.email);
       }



     Cliente.create({
  
  
      nome:dadoss.dados.nome,
       email:dadoss.dados.email,
      telefone:dadoss.dados.telefone,
       estado:dadoss.dados.estado,      
      cidade:dadoss.dados.cidade,
      emailbox:dadoss.dados.emailbox,
      whatsbox:dadoss.dados.whatsappBox
    
   
  })
     console.log("Passou  aqui")
  
 

 }});



app.listen(PORT ,() => {
    console.log("API Start HML");

})





function email(nome,email1,telefone,estado,cidade,whatsappBox,emailbox){

    var data = new Date();
    var dia     = data.getDate();           // 1-31
    var mes     = 1 +data.getMonth();          // 0-11 (zero=janeiro) 
    var ano4    = data.getFullYear();  
    var hora    = data.getHours();          // 0-23
    var min     = data.getMinutes();   
  
  
  
      const nodemailer = require('nodemailer');
      
      let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: process.env.NODE_USER,   
              pass: process.env.NODE_PASS        
  
  
          }
      });
      
  
     
  transporter.sendMail({
      from: '"<A Inteligência Criativa>" + process.env.NODE_USER', // sender address
      to:process.env.NODE_TO ,// list of receivers
      subject:'Lead: '+ email1, // Subject line
      text: "Teste", //'Data:13/08/2020 Nome :  Danilo  , E-mail: danilo.tito@hotmail.com , Telefone: (11)  7070-7070 ,Estado: São Paulo, Cidade : São Paulo  ', // plain text body
      html: '<h1>Lead </h1>'   
      +'<br> <b>Nome: </b>'   + nome     
      +'<br> <b>Email: </b>' + email1          
      +'<br> <b>Telefone: </b>' + telefone          
      +'<br> <b>Estado: </b>' + estado          
      +'<br> <b>Cidade: </b>'+ cidade       
      +'<br> <b>Receber por Whatsapp: </b>' + whatsappBox           
      +'<br> <b>Receber por Email: </b>' + emailbox      
       +'<br> <b>Data:  </b>' + dia + "/0" + mes +"/" + ano4      
      +'<br> <b>Hora: </b>'  +(hora -3 ) +":" +min     
      
  
  }).then(messge =>{
    console.log(messge);
    console.log("sdsdsds");
  }).catch(err =>{
  console.log(err)
  console.log("Erro");
  })
  
  }

  function emailCliente(nome1,email1){


  
  
    const nodemailer = require('nodemailer');
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.NODE_USER,   
            pass: process.env.NODE_PASS        


        }
    });
    

 
transporter.sendMail({
    from: '"A Inteligência Criativa" + process.env.NODE_USER', // sender address
    to:email1,// list of receivers
    subject:'Infográfico Gratuito', // Subject line
    text: "Teste", //'Data:13/08/2020 Nome :  Danilo  , E-mail: danilo.tito@hotmail.com , Telefone: (11)  7070-7070 ,Estado: São Paulo, Cidade : São Paulo  ', // plain text body
    html:'<br> <b>Olá, </b>' +nome1 +',<b> como você está?</b>'      
    +'<br> <b>Clique aqui para baixar seu Infográfico TOTALMENTE GRATUITO: </b>'      
    +'<br> <b>https://bityli.com/infograficogratis</b>'        
    +'<br> <b>Sinta-se à vontade para conversar conosco.</b>'          
    +'<br> <b>Aproveite! </b>'      
    +'<br> <br> '      
  

    +'<table style="font-size:12px;font-family:Tahoma"><tbody><tr> <td style="max-width:100px" valign="top">  <img alt="Sua foto ou logo" style="border-radius:4px;width:100px;height:100px" src="https://scontent.fvag3-1.fna.fbcdn.net/v/t1.0-1/p200x200/118439256_139237244523810_4838339172880461410_n.png?_nc_cat=110&amp;_nc_sid=1eb0c7&amp;_nc_ohc=5xpkozFRGEQAX9TA-K8&amp;_nc_ht=scontent.fvag3-1.fna&amp;oh=2c3fa22c664befdff81be7f1a621b855&amp;oe=5F6B2997">'
   +' </td>  <td style="padding:0 8px 0 8px">  <table style="color:rgb(181,71,231)">  <tbody><tr> <td style="font-size:14px;font-weight:bold;color:rgb(240,129,40)">Equipe </td>'
     +' </tr>  <tr> </tr>  <tr>  <td>A Inteligência Criativa</td> </tr>'   
       +' <tr> <td><a href="mailto:atendimento@ainteligenciacriativa.com.br" target="_blank">atendimento@ainteligenciacriativa.com.br</a></td>'
       + '</tr>  <tr> <td><a href="http://www.ainteligenciacriativa.com.br" target="_blank">http://www.ainteligenciacriativa.com.br</a></td>'
       +' </tr> <tr> <td>  <table style="margin-top:12px">  <tbody><tr> <td>  <div style="display:inline-block;margin-right:6px">'
      +'</div><div style="display:inline-block;margin-right:6px">  <a href="https://www.facebook.com/A-Intelig%C3%AAncia-Criativa-103010091479859" target="_blank"><img src="https://s3.amazonaws.com/rd-marketing-objects/marketing-tools/mail-signature/icons/social-icons/facebook.png" alt="Facebook" width="20px"></a>'
      + '</div><div style="display:inline-block;margin-right:6px">   <a href="https://www.instagram.com/ainteligenciacriativa/" target="_blank"><img src="https://s3.amazonaws.com/rd-marketing-objects/marketing-tools/mail-signature/icons/social-icons/instagram.png" alt="" width="20px"></a>'
       +'</div>  </td>  </tr> <tr>   <td style="padding:8px 0"><a href="https://ferramentas.resultadosdigitais.com.br/assinatura-de-email" target="_blank"><br></a></td>'
       +' </tr> </tbody></table>  </td> </tr> </tbody></table> </td></tr> </tbody></table>'
      


    

}).then(messge =>{
  console.log(messge);
  console.log("sdsdsds");
}).catch(err =>{
console.log(err)
console.log("Erro");
})


}

  
