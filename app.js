let pronoun = ['my','her','their','ours','the','some','whom'];
let adj = ['big','round','square','smart','crazy','windy','rainny'];
let noun = ['jogger','racoon','dog','pool','table','rabbit','ant']
let domain = [];

for(i=0;i<pronoun.length;i++) {
    for(k=0;k<adj.length;k++) {
        for(j=0;j<noun.length;j++) {
           domain.push(`${pronoun[i]}${adj[k]}${noun[j]}`);
        }  
    }
}
domain.forEach((element) => {
    console.log(element + ".us");
})


