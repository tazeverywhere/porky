﻿#include ../bin/porky.jsx;var thisParentFolder = File($.fileName).parent;var thisRootFolder = File("~").fsName;var thisAbsolutePath = unescape( thisParentFolder.toString().replace("~", thisRootFolder) );    thisAbsolutePath = thisAbsolutePath.replace(/\\/g, "/");// read an existing text file from a specific foldervar myCSVFileContent = readFile(thisAbsolutePath + '/test-file.csv');if(myCSVFileContent){    alert('File read with content\n' + myCSVFileContent);    // convert csv string to array    var myArray = csvToTwoDArray(myCSVFileContent, { rSep:'\n' , fSep:',' , quot:"'" , trim:true });    // accessing array    alert('File content as twoD array\n' + myArray);    alert('twoD array line 1\n' + myArray[0]);    alert('twoD array line 2\n' + myArray[1]);    alert('twoD array line 1 column 3\n' + myArray[0][2]);    // append array to a textframe, conversion to table is done automatically    var myTextframe = addFrame(15, 15, 100, 50, "");    var myTable = appendToFrame(myTextframe, myArray);    }else{    alert('File does not exist');}