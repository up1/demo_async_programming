asyncCall(function(err, data1){
    if(err) return callback(err);       
    anotherAsyncCall(function(err2, data2){
        if(err2) return calllback(err2);
        oneMoreAsyncCall(function(err3, data3){
            if(err3) return callback(err3);
            // TODO
        });
    });
});