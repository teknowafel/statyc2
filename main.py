# Import statements
import config
import os
import shutil
import datetime
import sys
import time as t

# Log the time to track execution speed
startTime = datetime.datetime.now()

# Get the working directory
location = os.getcwd()

# Gets the config
siteTheme = config.siteTheme
siteCopyright = config.siteCopyright
siteName = config.siteName
renderTo = location + config.renderTo
baseUrl = config.baseUrl

# Initialize variables for convenience and readability
templates = []

# This boolean lets the application know when it is done rendering
done = False

print("Init done...\n")

while done == False:

    print("====================\nGetting templates...\n====================")
    # Finds the templates to be rendered from the selected theme folder
    for file in os.listdir(location + "/" + siteTheme):
        try:
            if file.endswith(".html"):
                print("Found template with name " + file)
                templates.append(file)
            else:
                print("Found an unrelated file with name " + file)
        except Exception as e:
            print("No templates found. Try the theme directory and config.py to make sure that names match.")
            print(e)
    print("Templates found: " + str(templates) + "\n")

    print("======================\nRendering templates...\n======================")
    # Opens each template and renders it, executing python which is embedded
    for template in templates:
        # Open the template
        f = open(location + "/" + siteTheme + "/" + template)

        # Create a temporary variable to be used for the content of the rendered page
        pageContent = ""
        
        for line in f.readlines():
            if line.startswith("; "):
                line = line.removeprefix("; ")
                exec(line)
            else:
                pageContent = pageContent + line.format(**locals())
        
        # Temporary variable for the name of the outputted html file
        filename = renderTo + "/" + template
        # Write the file to the render folder
        f = open(filename, "w")
        f.write(pageContent)
        f.close()

        # Print confirmation
        print("Page " + template + " rendered successfully.\n")

    # Get static files path (css, js, etc...)
    staticPath = location + "/" + siteTheme + "/static"
    staticDest = renderTo + "/static"

    print("============================\nChecking for static files...\n============================")
    # Check for pre-existing static files, and delete them if they already exist
    if os.path.isdir(staticDest):
        try:
            shutil.rmtree(staticDest)
        except Exception as e:
            print("Could not delete the static destination directory... Error:")
            print(e)

    shutil.copytree(staticPath, staticDest)
    print("All files were copied successfully.\n")

    time = datetime.datetime.now() - startTime
    print(f"========================\nDone in {time} !\n========================")
    
    # Command line arguments handler
    if "-debug" in sys.argv:
        t.sleep(0.5)
        done = False
        
    else:
        # Tells the while loop that the pages have been rendered successfully and the application is done.
        done = True

    