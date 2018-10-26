<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?
        Sessions stores information about the client, we learned how to use this to make authentication persist, so authentication information wouldn't have to be resent every single time a request was made to the server.
2. What does bcrypt do to help us store passwords in a secure manner.
        Bcryptjs turns a password into a scramble of varies symbols and characters, called Cryptographic Hashing.
3. What does bcrypt do to slow down attackers?
         It does this  not just once, but many times, as many times as you set.
4. What are the three parts of the JSON Web Token?
        Payload which is the data itself. Secret is something only the server knows, it's how the library knows the token was made by that particular server. Last are Options or Permissions you want the data to be  allowed. (payload.secret.options)