# simple-diffusion-api
A simple Diffusion API

## Services
- GET "/" 
  Returns the main HTML page.
- POST "/generate/" 
  Accepts a JSON as a body parameter with a "prompt" value, then generates an image based on that value. Returns the generated image URL in the "url" value in JSON format.
  
## Difficulties
- Setting up the appropriate environment for the txt2img model
- Creating asynchronous requests using JS Fetch API
- Creating the HTML page, layout, and styling
- I initially wanted to use CompVis' Stable Diffusion model, but the virtual machine (GCP) is not powerful enough to generate images using it.

## Uniqueness
There are few prompt-based image generation web services compared to many other common web services, for example an authentication handler. Although that being said, there are many better services out there. This example is just a very simplified version.
