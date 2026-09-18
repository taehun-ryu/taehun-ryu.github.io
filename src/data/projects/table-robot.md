---
title: "Table Robot System"
subtitle: "Ceiling-Mounted Multi-Camera Perception for Multi-Robot Dining Automation"
date: "2024-05-29"
summary: "Developed ceiling-mounted multi-camera perception to estimate table robot positions and detect indoor obstacles using depth measurements and YOLOv8 tracking. Combined camera-derived position estimates with each robot's internal sensor-based position estimates through confidence-weighted interpolation to support autonomous table formation and guest service."
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

Conventional serving robots automate food delivery, but staff still need to move between tables to collect used dishes. During peak hours, staff and robots therefore share busy aisles, creating conflicts that can limit the usefulness of robotic delivery. High purchase prices also make it difficult to deploy enough robots to serve many customer groups simultaneously.

This project proposed a restaurant automation system in which each robot functions as a table for one diner. In the proposed workflow, customers order through kiosks, and staff load prepared meals onto robots at a staging area near the kitchen. The robots then move to the customers and assemble into a table sized for the group, combining food delivery and table formation in a single operation. For example, two robots carrying one meal each form a table for two diners. After the customers leave, the robots return to the staging area with the used dishes. Staff handle meal loading and dish collection near the kitchen, eliminating the need for staff to circulate between dining tables for these tasks and removing the associated conflicts with robot traffic.

Deploying one robot per diner makes the cost of each robot a central design consideration. A commercial BellaBot serving robot was [reported to cost approximately US$15,000 in 2023](https://www.axios.com/local/richmond/2023/07/14/robot-servers-plaza-azteca), whereas each table robot in this project had a prototype hardware cost of approximately US$1,470. Multiple robots shared ceiling-mounted cameras and a central perception system to reduce the need for costly perception hardware on each robot. Although the shared infrastructure incurs an additional installation cost, within its supported capacity that cost is spread across more robots as the fleet grows. This architecture was intended to make deployment at one robot per diner more affordable; the commercial purchase price and prototype hardware cost provide context rather than a complete comparison of total system costs.

## My contribution

- Computed LiDAR odometry using Iterative Closest Point (ICP) and estimated robot positions within each robot's internal system using an Extended Kalman Filter (EKF) that fused the LiDAR odometry with wheel encoder and inertial measurement unit (IMU) measurements.
- Independently estimated robot positions from ceiling-mounted cameras using depth measurements and YOLOv8 tracking, while also detecting indoor obstacles.
- Combined the position estimates from each robot's internal system and the ceiling-mounted cameras using interpolation weights determined by the confidence assigned to each estimate.

## Outcome

The meal delivery and dish-return workflow was successfully demonstrated indoors, from staff loading meals at the staging area to autonomous food delivery, table formation matched to the group size, and robot return with used dishes for staff collection. The demonstration integrated ceiling-camera perception, each robot's internal position estimation, and multi-robot coordination to carry out this workflow without staff moving between dining tables. Each prototype robot had a hardware cost of approximately US$1,470.

A paper describing the project's earlier simulator-based concept, before the physical demonstration, was presented at the *ICROS 2024* Undergraduate Student Paper Competition, where it received an **Undergraduate Student Paper Award**.

A patent application for the project was filed in South Korea.

The project also received the following awards:

- **Grand Prize**, 2024 Creative Capstone Design Competition, a college-wide competition at the College of Engineering, Hanyang University ERICA (교내 창의적 종합설계 경진대회).
- **Encouragement Award**, 2024 Intelligent Robotics Consortium Creative Capstone Design Competition, a national-level competition (지능형 로봇 컨소시엄 창의적 종합설계 경진대회).
- **Gold Award**, 2024 College of Engineering Capstone Design Fair, a department-level competition within the Department of Robotics, Hanyang University ERICA (공학대학 CAPSTONE DESIGN FAIR).
