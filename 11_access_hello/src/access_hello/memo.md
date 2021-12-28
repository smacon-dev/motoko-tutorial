### dfx identity whoami

### dfx identity get-principal
```
c5mlk-tprkx-ji7th-myvqp-gvqhy-y3feg-2tlvn-tvrfb-nyw6i-kupoh-4qe
```

### dfx canister --wallet=$(dfx identity get-wallet) call access_hello my_role

### dfx identity new ic_admin

### dfx --identity ic_admin canister call access_hello my_role

### dfx identity use ic_admin && dfx identity get-principal
```
Using identity: "ic_admin".
ptgej-o2oox-uin5n-64lps-ouln7-e677b-jwi75-ije6c-x3awj-o6yw7-mae
```

### dfx canister call access_hello callerPrincipal


### dfx identity use default


### dfx canister --wallet=$(dfx identity get-wallet) call access_hello assign_role '((principal "ptgej-o2oox-uin5n-64lps-ouln7-e677b-jwi75-ije6c-x3awj-o6yw7-mae"),opt variant{admin})'

### dfx --identity ic_admin canister call access_hello my_role

### dfx --identity ic_admin canister call access_hello greet "Internet Computer Admin"


dfx --identity ic_admin canister call access_hello assign_role "(principal \"$ALICE_ID\", opt variant{authorized})"



NNS 184386
Your principal id is "u77fq-nsijk-rwkch-kzgfw-kcp3n-fy4vh-em7sx-kho4g-yoxha-cvwhb-hae"


dfx canister --network=ic --wallet=$(dfx identity --network=ic get-wallet) call --with-cycles $(echo "$(dfx wallet --network=ic balance | cut -d' ' -f1)-10000000000" | bc) aanaa-xaaaa-aaaah-aaeiq-cai mint "(principal \"$(dfx identity get-principal)\")"

dfx canister --network=ic --wallet=$(dfx identity --network=ic get-wallet) call --with-cycles $(echo "$(dfx wallet --network=ic balance | cut -d' ' -f1)-10000000000" | bc) aanaa-xaaaa-aaaah-aaeiq-cai mint "(principal \"$(dfx identity get-principal)\")"

$ dfx canister --network=ic --no-wallet call aanaa-xaaaa-aaaah-aaeiq-cai burn "(record { canister_id= principal \"some-canister's-principal-id\"; amount= (2000:nat64)})"
(variant { Ok = 1 })