# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Load the sencha-touch framework
load File.join(dir, '..', 'lib', 'touch', 'resources', 'themes')

# Look for any *.scss files in same directory as this file
# Place compiled *.css files in the parent directory
sass_path    = dir
css_path     = File.join(dir, "..", 'resources', 'css')
images_dir   = File.join(dir, "..", 'resources', 'img')

# For Development
output_style = :expanded
environment  = :development

# For production
#output_style = :compressed
#environment  = :production
