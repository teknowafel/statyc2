screen -dmS http "python -m http.server"
rm -r docs/
wget -m localhost:8000/themes/$THEME_NAME -P docs/
screen -X -S http quit