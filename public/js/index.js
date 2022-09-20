
  var i = 1
export default function typing(st)
{
      var message = "C:\Users&#62; ls"
      if( i <= message.length )
      {
          
          var txt = message.substring(0,i)
          st(txt)
          
          setTimeout("typing(st)",200);
          i++;
      }
      
      else{
          
          i = 1;
          st(txt)
          setTimeout("typing(st)",1000);
      }
}