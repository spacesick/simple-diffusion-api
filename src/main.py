from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from diffusers import DiffusionPipeline

from uuid import uuid4


app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get('/', response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post('/generate/', response_class=JSONResponse)
async def generateImage(request: Request):
    pipe = DiffusionPipeline.from_pretrained(
        "CompVis/ldm-text2im-large-256",
        cache_dir="/home/vincent_yovian01/modelcache",
        resume_download=True
    ).to("cpu")

    json = await request.json()
    url = f"static/images/{uuid4()}.png"

    image = pipe(json['prompt']).images[0]
    image.save(url)

    return {
        'url': url
    }
