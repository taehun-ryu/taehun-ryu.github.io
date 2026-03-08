---
title: Large Unmanned Store System
date: 2023-01-31
summary: "Developed a low-cost autonomous cart system with centralized multi-camera perception, camera-to-global calibration, and cart-level autonomy."
links:
  - type: code
    url: https://github.com/taehun-ryu/ShareChallenge_team_yycprg.git
tags:
  - Infrastructure-based Perception
  - Multi-Camera Calibration
  - Person Following
  - Undergraduate
---
<p class="project-meta-note">Undergraduate project at Hanyang Univ.</p>

This project proposed a cost-efficient unmanned store system by centralizing heavy perception on a main vision server and keeping each cart lightweight. For full project scope and team-level implementation details, see the [project repository](https://github.com/taehun-ryu/ShareChallenge_team_yycprg.git).

### My Contribution

1. Infrastructure Perception
   - Calibrated multiple ceiling cameras and transformed each camera coordinate to a single global reference frame.
   - Built multi-camera person detection and converted detections into global target positions for cart following.

2. Cart Autonomy
   - Implemented a local safety layer with front/rear LiDARs to reduce blind spots and react to nearby obstacles in real time.
   - Estimated cart pose from encoder odometry and corrected accumulated drift using ArUco marker observations.

### Outcome

- Demonstrated person-following and obstacle-aware cart operation in an indoor retail-like setup.
- Reduced cart-side compute burden and achieved a prototype cart hardware cost below KRW 800,000.
