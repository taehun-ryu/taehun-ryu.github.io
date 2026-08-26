---
title: "Large Unmanned Store System"
date: "2023-01-31"
summary: "Built a low-cost autonomous cart system with centralized multi-camera perception, global calibration, and cart-level autonomy."
affiliation: "Undergraduate project at Hanyang University ERICA"
image: "/images/projects/unmanned-store.png"
imageAlt: "Autonomous shopping cart and ceiling-camera perception system"
code: "https://github.com/taehun-ryu/ShareChallenge_team_yycprg.git"
featured: true
---

## Overview

This project proposed a cost-efficient unmanned store system by centralizing heavy perception on a main vision server and keeping each cart lightweight.

## My contribution

- Calibrated multiple ceiling cameras and transformed their coordinates into a shared global reference frame.
- Built multi-camera person detection and converted detections into global target positions for cart following.
- Implemented a local LiDAR safety layer and corrected encoder-odometry drift using ArUco marker observations.

## Outcome

The system demonstrated person following and obstacle-aware cart operation in an indoor retail-like setup, while keeping prototype cart hardware below KRW 800,000.
