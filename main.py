# Import statements
import config
import os

# Get the working directory
location = os.getcwd()

# Gets the config
siteTheme = config.siteTheme
siteCopyright = config.siteCopyright
siteName = config.siteName
renderTo = location + config.renderTo

# Initialize variables for convenience and readability
templates = []

# Finds the templates to be rendered from the selected theme folder
for file in os.listdir(location + "/" + siteTheme):
    try:
        if file.endswith(".html"):
            print("Found template with name " + file)
            templates.append(file)
        else:
            print("Found an unrelated file...")
    except Exception as e:
        raise e
        print("No templates found. Try the theme directory and config.py to make sure that names match.")

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
    f = open(filename, "a")
    f.write(pageContent)
    f.close()
