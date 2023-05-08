# 🚢 IMPORTS
import os, subprocess, shutil

# ⚙️ CONFIG
repo_to_update = "https://github.com/aeiea/autoupdateonfolder-workflow.git" # put your repo's github thingy
folder_to_check_for_updates = "test" # checks the folder test for updates
file_to_update = "listoffiles.txt" # list of files in the directory test

# 🐍 CODE
try:
      gh_key = os.environ["API_KEY"]
except:
      print("Hey! you might of forgotten your github API key!")
print('''
       ,            .    ,       
 _.. .-+- _ . .._  _| _.-+- _ ._.
(_](_| | (_)(_|[_)(_](_] | (/,[  
               |                 
          by @aeiea
 used on {your username}/{repo}
''')
subprocess.run("git clone --depth=1 " + repo_to_update + " thisfolderisgoingtobedeleted && rm -rf thisfolderisgoingtobedeleted/.git", shell=1)
files = [f for f in os.listdir("thisfolderisgoingtobedeleted/" + folder_to_check_for_updates + "/") if os.path.isfile(os.path.join("thisfolderisgoingtobedeleted/" + folder_to_check_for_updates + "/", f))]
shutil.rmtree("thisfolderisgoingtobedeleted")
thingtoedit = open(file_to_update, "w")
thingtoedit.write(str(files))
thingtoedit.close()