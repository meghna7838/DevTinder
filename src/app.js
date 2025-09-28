const express = require("express");

const app = express();

// app.use("/test",(req,res)=>{
//     res.send("HELLO FROM TEST");
// });

// app.use("/trying",(req,res)=>{
//     res.send("HELLO FROM TRYING");
// })
// app.use("/",(req,res)=>{
//     res.send("HELLO fROM /");
// });

app.get(
    "/user",(req,res)=>{
        res.send("USER GET");
    }
);

app.post(
    "/user",(req,res)=>{
        res.send("USER PosT")
    }
);

app.put(
    "/user",(req,res)=>{
        res.send("USER PUT")
    }
);

app.patch(
    "/user",(req,res)=>{
        res.send("USER PATCH")
    }
);

app.delete(
    "/user",(req,res)=>{
        res.send("USER DELETE");
    }
);

app.listen(7777,()=>{
    console.log("SERVER IS RUNNING");
});

