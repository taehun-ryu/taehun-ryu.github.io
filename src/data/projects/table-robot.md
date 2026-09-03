---
title: "Table Robot System"
subtitle: "Multi-Robot Dining Automation with Ceiling-Camera Perception and Dynamic Path Planning"
date: "2024-05-29"
summary: "Developed a multi-robot dining system that autonomously forms tables and serves guests using ceiling-camera perception and dynamic path planning."
affiliation: "Undergraduate project at Hanyang University ERICA"
image: "/images/projects/table-robot.png"
imageAlt: "Multiple table robots operating in an indoor restaurant environment"
code: "https://github.com/BEYOND-thelimit/TableRobotSystem-hive.git"
paper:
  label: "Project paper · ICROS 2024"
  url: "/uploads/icros2024.pdf"
featured: true
---

## Overview

This project developed a centralized perception and coordination framework for multiple table robots in an indoor environment.

## My contribution

- Computed ICP-based LiDAR odometry and fused IMU, wheel encoder, and LiDAR measurements in an onboard EKF.
- Combined onboard state estimates with ceiling-camera observations through confidence-weighted interpolation.
- Used depth measurements and YOLOv8 tracking to estimate robot positions and identify indoor obstacles.

## Outcome

The integrated system was validated in an end-to-end indoor demonstration and established a practical localization stack spanning onboard estimation and infrastructure-based visual perception. A project paper was presented at the *ICROS 2024* Undergraduate Student Paper Competition, where it received an **Undergraduate Student Paper Award**.
