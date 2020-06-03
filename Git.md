# Node.js
$ sudo apt i nodejs
$ sudo apt i npm
$ nodejs -v 		to check which version of Nodejs


# To connect Git to Github

## Get a Github account
## Download & install Git
## Setup Git with username & email

	$ git config --global user.name "Your name here"

	$ git config --global user.email "your_email@example.com"

## extra:

	$ git config --global color.ui true

	$ git config --global core.editor emacs

## Checking for existing SSH keys
	$ ls -al ~/.ssh

## Lists the files in your .ssh directory, if they exist

	Check the directory listing to see if you already have a public SSH key. By default, the filenames of the public 	keys are one of the following:
    • id_rsa.pub
    • id_ecdsa.pub
    • id_ed25519.pub

## Generating a new SSH key and adding it to the ssh-agent

    1. If not, create such public/private keys: Open a terminal/shell and type:
      $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
      
	This creates a new ssh key, using the provided email as a label.
	> Generating public/private rsa key pair.

	When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file 		location.

	> Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]
	> Enter passphrase (empty for no passphrase): [Type a passphrase]
	> Enter same passphrase again: [Type passphrase again]

	2. Add the SSH key to your GitHub account.
	    In Github:     Settings →SSH and GPG keys→ New SSH key

		1. In the "Title" field, add a descriptive label for the new key. For example, if you're using a personal Mac, you might call this key "Personal MacBook Air".

		2 . Copy SSH Keys 
 	 	    cat /home/mahsa/.ssh/id_rsa.pub   or (cat filename e.g. mahsa.pub  … it is public key, which starts 			  with ssh-rsa and at the end the email address)
		
		3 .Paste your key into the "Key" field.
		4 .Click Add SSH key.
		5 .If prompted, confirm your GitHub password.

		If it says something like the following, it worked:
		   Hi username! You've successfully authenticated, but Github does not provide shell access.


	3. Adding your SSH key to the ssh-agent
		Start the ssh-agent in the background.
 			$ eval "$(ssh-agent -s)"
			> Agent pid 59566
		Add your SSH private key to the ssh-agent. 
			$ ssh-add ~/.ssh/id_rsa

	



	

Connecting to GitHub with SSH
https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh

Checking for existing SSH keys
https://help.github.com/en/github/authenticating-to-github/checking-for-existing-ssh-keys

Generating a new SSH key and adding it to the ssh-agent
https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

How to Copy SSH Keys
https://linuxhint.com/copy_ssh_keys/

Adding a new SSH key to your GitHub account
https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account



…or create a new repository on the command line
echo "# contactKeeper" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/mahdieh019/contactKeeper.git
git push -u origin master


…or push an existing repository from the command line
git remote add origin https://github.com/mahdieh019/contactKeeper.git
git push -u origin master
