---
title: "Large Unmanned Store System"
subtitle: "Ceiling-Mounted Multi-Camera Perception for Autonomous Shopping Carts"
date: "2023-01-31"
summary: "Developed a vision-server-based perception system that detected people across multiple ceiling-mounted cameras and expressed their positions in a common global coordinate system for autonomous shopping cart following. Integrated cart-mounted LiDAR sensing and ArUco-based correction of wheel encoder odometry to support cart operation."
affiliation: "Undergraduate project at Hanyang University ERICA"
image: "/images/projects/unmanned-store.png"
imageAlt: "Autonomous shopping cart and ceiling-camera perception system"
code: "https://github.com/taehun-ryu/ShareChallenge_team_yycprg.git"
featured: true
---

## Overview

The enjoyment of shopping comes from discovering and choosing products, such as favorite foods or interesting toys. Carrying a heavy basket or pushing a cart adds physical effort to that experience. This project proposed an autonomous shopping cart system to relieve customers of that effort, allowing them to focus on browsing and selecting products.

In the proposed shopping experience, each customer is automatically assigned a dedicated cart upon entering the store. Ceiling-mounted cameras identify the customer's position and provide the observations needed for the cart to follow them, without requiring the customer to register themselves as a target or manually activate following. The cart accompanies the customer throughout their shopping trip and carries the items they select.

Retail environments contain shelves and product displays that can obstruct a cart-mounted camera's view of the customer it follows. The project therefore placed cameras on the ceiling to observe customers from above and reduce reliance on each cart's limited view. With this infrastructure in place, the design concentrated investment in a shared multi-camera perception system and central vision server, removing the need for customer-following cameras and their associated vision processing on individual carts.

The system targets large stores where many customers shop simultaneously. Although the shared perception infrastructure requires an initial investment, its cost can be distributed across many carts within its supported capacity, while each cart requires less perception hardware. In convenience stores or smaller shops with few simultaneous customers, the savings on individual carts may be insufficient to offset the infrastructure cost. Large stores offer a more suitable setting for this architecture because they require enough carts for the lower per-cart hardware cost to become a meaningful advantage in providing one cart per customer.

## My contribution

- Calibrated multiple ceiling-mounted cameras and established coordinate transformations to express position estimates from each camera in a common global coordinate system.
- Implemented person detection across the ceiling-mounted cameras on a central vision server and converted the detected person positions into global target coordinates for customer-following carts.
- Integrated cart-mounted LiDAR measurements for obstacle detection to support safe cart operation.
- Corrected accumulated drift in wheel encoder odometry using observations of ArUco markers attached to store shelves to update cart position estimates.

## Outcome

The system demonstrated customer following and cart operation with obstacle detection in an indoor environment configured to represent a retail setting. The prototype cart's hardware cost was below approximately US$610.

The project received an **Encouragement Award** at the *2023 Digital Innovation Sharing University Robot Building Competition* (디지털혁신공유대학 로봇제작대회).
