---
title: "From Corners to Fiducial Tags: Revisiting Checkerboard Calibration for Event Cameras"
authors:
  - me
  - Changwoo Kang
  - Kyungdon Joo
author_notes:
  - ""
  - ""
  - "Corresponding author"
date: "2026-02-24T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2026-02-24T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "*IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)*"
#publication_short: "*CVPR*"

abstract: |
  The conventional checkerboard-based calibration for standard cameras faces fundamental limitations when applied to bio-inspired event cameras. Specifically, this stems from two challenges: (i) Events are triggered asynchronously at different timestamps along motion trajectories. If we accumulate them directly on the image plane, it causes temporal misalignment and produces blurred edges. Directly accumulating them on the image plane causes temporal misalignment and produces blurred edges. (ii) Checkerboard corners on event cameras show near-zero event occurrence at the corner itself. This hinders reliable corner localization and makes calibration difficult. To address these issues, we present a novel calibration framework that directly detects checkerboard corners from a raw event stream. We first mathematically analyze the absence of events at corner points. Based on this fact, we then leverage edge-driven event cues to initialize corner positions. Using the near-zero event occurrence at checkerboard corners, we gradually refine the estimated corner toward low event-density regions, achieving sub-pixel accuracy. Furthermore, we extend the corner detection to fiducial markers such as AprilTags, resulting in reliable detection even under partial visibility or occlusion. Evaluations on self-collected and public data demonstrate reliable checkerboard corner detection and stable camera calibration.

# Summary. An optional shortened abstract.
summary: Accepted to CVPR 2026.

tags:
  - Event Camera
  - Calibration
  - Checkerboard
featured: false

links:
  - type: source
    name: "Site"
    url: "/publications/cvpr2026/"
  - type: pdf
    name: "Paper"
    url: "/publications/cvpr2026/"
  - type: project
    name: "Project"
    url: "/publications/cvpr2026/"
  - type: pdf
    name: "Supple"
    url: "/publications/cvpr2026/"
  - type: code
    name: "Code"
    url: "/publications/cvpr2026/"

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

This work has been accepted to **CVPR 2026**.
