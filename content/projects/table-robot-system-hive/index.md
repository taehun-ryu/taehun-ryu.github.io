---
title: Table Robot System for Complete Restaurant Hall Automation
date: 2024-05-29
summary: "Developed a hybrid localization framework combining robot-internal EKF estimates (IMU, wheel encoder, and LiDAR) with ceiling-camera observations."
links:
  - type: code
    url: https://github.com/BEYOND-thelimit/TableRobotSystem-hive.git
tags:
  - Multi-Robot system
  - Infrastructure-based Perception
  - Multi-Camera Calibration
  - Navigation
  - Undergraduate
---
<p class="project-meta-note">Undergraduate project at Hanyang Univ.</p>

This project developed a centralized perception and coordination framework for multiple table robots in an indoor environment. For full project scope and team-level implementation details, see the [project repository](https://github.com/BEYOND-thelimit/TableRobotSystem-hive.git).

### My Contribution

1. Localization
   - Computed ICP-based LiDAR odometry and fused IMU, wheel-encoder odometry, and LiDAR odometry in an onboard EKF estimator.
   - Estimated final robot states through confidence-weighted interpolation between robot-internal EKF estimates and ceiling-camera observations.

2. Vision system using ceiling-camera
   - Estimated robot position w.r.t camera coordinates utilizing depth measurements and YOLOv8 (for robot detection and tracking), providing external information for robust robot localization.
   - Identified indoor obstacles for ensuring safe and accurate path planning.

### Outcome

- Validated the integrated system through a successful end-to-end demonstration in a real indoor environment.
- Established a practical localization stack combining onboard state estimation and infrastructure-based visual perception.
- Improved robustness of environment-aware multi-robot operation through joint robot and indoor-scene detection.
