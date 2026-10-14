---
title: 'CNN defect detection'
badges:
  - Case Studies
  - Manufacturing
  - Computer Vision
order: 4
image: '/images/opai-img-3.png'
imageAlt: 'CNN defect detection manufacturing case study visual'
teaser: 'Real-time visual inspection and quality control on production lines.'
personName: 'James Park'
personRole: 'VP of Manufacturing'
darkPanelAriaLabel: 'CNN defect detection case study'
metricLeft:
  value: 94
  label: 'Defect detection accuracy'
  ariaLabel: '94 percent defect detection accuracy'
metricRight:
  value: 40
  label: 'Fewer product recalls'
  ariaLabel: '40 percent reduction in product recalls'
heroImageMain: '/images/opai-img-3.png'
heroImageSecondary:
  - '/images/opai-img-8.png'
  - '/images/opai-img-9.png'
---

Manufacturers increasingly rely on convolutional neural networks (CNNs) to catch defects that human inspectors miss—especially at line speed. This engagement focused on deploying a production-ready vision pipeline: labeled data strategy, edge inference, and feedback loops that keep models accurate as products and lighting conditions change.

### Client Overview

Our client runs high-volume discrete manufacturing with strict quality gates. Manual sampling could not scale with new product variants, and false accepts were driving costly downstream rework. They needed automated visual inspection that could run next to the line with low latency and explainable alerts for operators.

### Challenges

- Inconsistent lighting and part orientation across stations  
- Limited labeled defect examples for rare failure modes  
- Need for sub-second inference without cloud dependency  
- Integration with MES and quarantine workflows  

### Strategy & Approach

We built a phased program: baseline CNN architecture on historical images, hard-negative mining, then edge deployment with calibration and continuous learning from operator corrections.

#### 1. Data & labeling

- Consolidated image capture from key stations with consistent framing  
- Structured labeling for defect classes and “borderline OK” cases  
- Augmentation and class balancing for rare defects  

#### 2. Model & deployment

- CNN architecture tuned for the client’s resolution and defect sizes  
- Quantization and GPU/edge targets for real-time throughput  
- Confidence thresholds aligned to precision/recall tradeoffs per SKU  

#### 3. Operations & governance

- Operator UI for override, annotation, and escalation  
- Audit trail from alert to disposition  
- Retraining cadence tied to drift monitoring  

### Results

- **94%** defect detection accuracy on held-out validation  
- **40%** reduction in recall-related incidents within two quarters  
- Faster root-cause feedback to upstream process owners  

### Key Takeaways

A CNN-based inspection stack is as much an operations program as a model: labeling discipline, edge reliability, and human-in-the-loop feedback determine whether accuracy in the lab becomes trust on the floor.

### What they said:

> "We finally catch edge-case defects before they leave the plant. The team paired solid vision science with a workflow our operators actually use."
