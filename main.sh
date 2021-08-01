EXPORT THEME_NAME=default

tmux new -s http -d
tmux send-keys -t http "python -m http.server" ENTER
rm -r docs/
wget -r -np -nH localhost:8000/themes/$THEME_NAME/ -P docs/
tmux kill-session -t http