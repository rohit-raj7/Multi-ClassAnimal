🐾 Multi-Class Animal Recognition for Wildlife Conservation
A deep learning-based system for automated recognition of animal species from images, designed to support wildlife conservation efforts using scalable AI tools and lightweight APIs.

✅ Project Overview
Built to classify multiple animal species captured in wildlife sanctuaries, forests, or reserves.

Aims to assist biodiversity monitoring, species mapping, and poaching prevention.

Developed using PyTorch, FastAPI, and Streamlit.

🧠 Core Technologies
Model: ResNet50 (pretrained on ImageNet, fine-tuned on a custom wildlife dataset).

Backend API: FastAPI for high-performance inference endpoints.

Frontend: Streamlit for easy visualization and demo purposes.

Optional Deployment: Docker-ready architecture for scalable use.

🐅 Model Details
The ResNet50 model was trained on labeled images of animals such as:

Elephant

Leopard

Panda

Lion

Rhino

Jaguar

Chimpanzee

Training involved standard image classification techniques with data augmentation for robustness.

Achieves high accuracy on test sets with top-1 prediction confidence.

🔗 FastAPI Backend Features
Exposes a /predict API endpoint for image classification.

Accepts image files (or base64) and returns:

Predicted species

Confidence score

Handles pre-processing: resizing, normalization, and tensor conversion.

Lightweight and fast, suitable for edge and cloud deployment.

🎛️ Streamlit Frontend Features
User-friendly UI for uploading images and receiving predictions.

Real-time feedback for conservation researchers or field teams.

Can be extended with maps, image galleries, or logs of predictions.

🛠️ System Workflow
User uploads or streams an image.

Image is sent to FastAPI backend.

Model runs inference using ResNet50.

Prediction and confidence score are returned.

Streamlit frontend displays the result in real time.

🚀 Future Enhancements
Add support for YOLOv8 for object detection with bounding boxes.

Implement predator-prey co-occurrence alerts.

Expand the animal species database.

Integrate with a dashboard for historical tracking and heatmaps.

Containerize with Docker for deployment on edge devices (e.g., forest cams, drones).

🧩 Potential Use Cases
Real-time monitoring in wildlife reserves.

Supporting forest rangers in anti-poaching efforts.

Educational tools for biology students and researchers.

Integration into larger conservation alert systems.

💡 Key Benefits
Accurate and fast classification of animal species.

Easy to deploy and integrate with existing systems.

Open-source and extendable architecture.

Promotes tech-for-good in the conservation domain.
## Alert Output
- WebSite Quick Demo:- [([https://drive.google.com/file/d/1S8TOoh9hTh7WAUCdIvk-cJzlFV27jHjn/view](https://drive.google.com/file/d/1RCzK3JOSj1GIIBbq-3KyW03KidAiCSh9/view?usp=sharing))](https://drive.google.com/file/d/1RCzK3JOSj1GIIBbq-3KyW03KidAiCSh9/view?usp=sharing)
- Alert sent to email
- ![Uploading image.png…]()

- ![image](https://github.com/Naveenlingala/Wildlife-Conservation-Project/assets/60232407/f3c55d94-10f1-4655-935d-d9a14aaf263c)

