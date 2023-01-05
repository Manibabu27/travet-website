

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCHI71bCG2ZObbs8qL3qSbjSLn2hAhjR88",
    authDomain: "gypsys-trips.firebaseapp.com",
    projectId: "gypsys-trips",
    storageBucket: "gypsys-trips.appspot.com",
    messagingSenderId: "1029925372248",
    appId: "1:1029925372248:web:d7b98d172ee167ac35e52d",
    measurementId: "G-ESJ29GBE7V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth = firebase.auth();
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		
		
	}
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});
	
