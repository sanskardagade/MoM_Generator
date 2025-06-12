#!/usr/bin/env bash
# exit on error
set -o errexit

# Install FFmpeg
apt-get update
apt-get install -y ffmpeg

# Install Python dependencies with memory optimization
export PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:128
pip install --no-cache-dir -r requirements.txt 