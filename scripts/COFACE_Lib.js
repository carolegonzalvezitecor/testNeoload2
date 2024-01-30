/**
* Write in log file
* @param fileName & User Id
*/
function writeLogFile(fileName, iterationId, userId) {

var lock = new java.util.concurrent.locks.ReentrantLock();

{

lock.lock();

var writer = new java.io.FileWriter(fileName,true);

writer.write("VU :"+context.currentVU.id+ ", Iteration :" + iterationId + ", User :"+userId);
writer.write("\r\n");
writer.close();

lock.unlock();
}
}

function convertToUTF8(text) {
text.replace("&", "&amp;")
text.replace("©","&#64;");	 
text.replace("æ","&#230;");	
text.replace("ß","&szlig;");	 
text.replace("Ã","&Atilde;"); 
text.replace("Á","&Aacute;"); 
text.replace("Ä","&Auml;"); 	 
text.replace("Ö","&Ouml;");	 
text.replace("Ü","&Uuml;");   
text.replace("Ú","&Uacute;"); 
text.replace("Õ","&Otilde;"); 
text.replace("Ó","&Oacute;"); 
text.replace("Ø","&Oslash;");
text.replace("Ñ","&Ntilde;"); 
text.replace("É","&Eacute;"); 
text.replace("Ë","&Euml;");   
text.replace("È","&Egrave;"); 
text.replace("Í","&Iacute;"); 
text.replace("Ç","&Ccedil;"); 
text.replace("Ä","&auml;");
text.replace("ë","&euml;");	 
text.replace("ö","&ouml;");	 
text.replace("ü","&uuml;");	 
text.replace("à","&agrave;");
text.replace("â","&acirc;");	 
text.replace("å","&aring;");	 
text.replace("ô","&ocirc;");	 
text.replace("ø","&oslash;");
text.replace("é","&eacute;");
text.replace("è","&egrave;");
text.replace("ê","&ecirc;");	 
text.replace("ú","&uacute;");

return text;
        
}

/**
* Converts a string in a UTF-8 chars array.
* @param str the string to convert
*/
function convertStringToASCII(str) {
    var ascii = [];
    for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) ascii.push(charcode);
        else if (charcode < 0x800) {
            ascii.push(0xc0 | (charcode >> 6),
                      0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            ascii.push(0xe0 | (charcode >> 12),
                      0x80 | ((charcode>>6) & 0x3f),
                      0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + (((charcode & 0x3ff)<<10)
                      | (str.charCodeAt(i) & 0x3ff));
            ascii.push(0xf0 | (charcode >>18),
                      0x80 | ((charcode>>12) & 0x3f),
                      0x80 | ((charcode>>6) & 0x3f),
                      0x80 | (charcode & 0x3f));
        }
    }
    return ascii;
}