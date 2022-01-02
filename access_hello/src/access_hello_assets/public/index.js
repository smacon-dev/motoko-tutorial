import access_hello from 'ic:canisters/access_hello';

access_hello.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
