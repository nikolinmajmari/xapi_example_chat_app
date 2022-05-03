import {SessionProvider, FileAdapter, config, InMemorySessionAdapter} from "../deps.ts";

const envConf = config();

let adapter:any ;
if(envConf["DEPLOY"]=="deno_depploy"){
  console.log("loaded",envConf);
  adapter = new InMemorySessionAdapter();
}else{
  adapter = new FileAdapter().configure({sessionPath:"./var/session"});
}


const appSession = new SessionProvider({
  adapter: adapter,
  lifetime: 1020202,
  secret: "secret",
});

export default appSession;
