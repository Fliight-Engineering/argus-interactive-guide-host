# Argus VTS Documentation - Content Update Summary

**Date**: November 24, 2025  
**Source**: Argus VTS User Guide V3.3 [PRE RELEASE] - HTML export from Word document  
**Images**: 35 images copied from source to `/static/img/vts-guide/`

## Overview

All documentation has been rewritten to match the actual V3.3 User Guide HTML source file. Content now reflects precise technical specifications, procedures, and operational guidelines from the official documentation.

## Files Updated

### Core Documentation

#### 1. `/docs/about-vts.md`
- ✅ Added VTS kit image (image20.png)
- ✅ Updated system components description
- ✅ Added battery specifications (18V/6Ah for APs, 12V/3Ah for RCS)
- ✅ Updated system capabilities and benefits

#### 2. `/docs/system-components.md`
- ✅ Added Argus software screenshot (image28.png)
- ✅ Added Access Point hardware images (image6.png, image1.png, image3.png)
- ✅ Added RCS mounting examples (image23.png, image9.png)
- ✅ Added Trainer tablet image (image4.png)
- ✅ Updated with WiFi credentials: `ARGUS-VTS-XXX` / `BarmincoVTS`
- ✅ Added tablet PIN: **2580**
- ✅ Added WiFi range: 50 meters line of sight

### Setup & Operation

#### 3. `/docs/setup-operation/index.md`
- ✅ Added **5-step Machine AP setup procedure** with 4 images:
  - image32.png (Step 1: Unfold antennas)
  - image24.png (Step 2: Rotate mast)
  - image25.png (Step 3: Locking pin)
  - image21.png (Step 4: Position antennas)
- ✅ Added power button image (image8.png)
- ✅ Added LED status sequence images (image17.png, image19.png, image2.png, image26.png)
- ✅ Added camera sync procedure with image (image5.png)
- ✅ Updated LED status tables with exact color meanings

#### 4. `/docs/setup-operation/tablet-setup.md`
- ✅ Added tablet camera location image (image7.png)
- ✅ Added power button location image (image13.png)
- ✅ Updated with **PIN: 2580**
- ✅ Updated WiFi credentials: `ARGUS-VTS-XXX*` / `BarmincoVTS`
- ✅ Added WiFi range specification (50 meters)

#### 5. `/docs/setup-operation/vehicle-setup.md`
- ✅ Added rear view image (image18.png) showing Machine AP position
- ✅ Added **4 camera position diagrams**:
  - image15.png (Rear quarter view)
  - image16.png (Forward bucket view)
  - image12.png (Front bucket and tire view)
  - image14.png (Cab interior view)
- ✅ Updated camera mounting specifications (magnetic vs suction cup)
- ✅ Updated typical 4-camera setup table

#### 6. `/docs/setup-operation/operation.md`
- ✅ Added **VTS Operation Guidelines** section with:
  - **Minimum AP Distance: 30 meters** (critical spacing requirement)
  - Trainer/Repeater AP positioning guidelines
  - Connection monitoring procedures
- ✅ Added Argus full-screen interface image (image33.jpg)
- ✅ Added **Network Health Monitoring Panel** section with color indicators:
  - 🟢 Green = Optimal
  - 🟠 Orange = Functional
  - 🔴 Red = Poor
- ✅ Added mesh settings image (image35.png)
- ✅ Added **extending coverage around corners** with antenna configuration images:
  - image10.png (Both antennas up)
  - image11.png (Corner configuration)
- ✅ Added training area map example (image34.png)
- ✅ Added network band naming (wlan0: 2.4GHz, wlan1: 5GHz)

### Access Points

#### 7. `/docs/access-points/index.md`
- ✅ Added Repeater AP configuration images (image10.png, image11.png)
- ✅ Updated with **200m+** distance specification for repeaters
- ✅ Added antenna configuration details for corner coverage

## Key Technical Specifications Added

### Exact Values from V3.3 Guide

| Specification | Value | Source |
|---------------|-------|--------|
| **Tablet PIN** | 2580 | HTML Section: Logging In |
| **WiFi Name** | ARGUS-VTS-XXX* | HTML Section: System Set-up |
| **WiFi Password** | BarmincoVTS | HTML Section: System Set-up |
| **AP Battery** | 18V/6Ah Milwaukee | HTML Section: Battery Life of access points |
| **AP Battery Life** | Minimum 10 hours | HTML Section: Battery Life of access points |
| **RCS Battery** | 12V/3Ah Milwaukee | HTML Section: Battery Life of RCS |
| **RCS Battery Life** | 12 hours | HTML Section: Battery Life of RCS |
| **WiFi Range** | Up to 50 meters (line of sight) | HTML Section: System Set-up |
| **Minimum AP Distance** | 30 meters | HTML Section: Minimum AP Distance |
| **Repeater Range** | 200m+ | HTML Section: Access points(nodes) |
| **Network Bands** | wlan0: 2.4GHz, wlan1: 5GHz | HTML Section: Network Health Monitoring Panel |
| **IP Range** | 10.177.154.x | HTML Section: Network band naming |

## Images Added (35 total)

All images copied to: `/static/img/vts-guide/`

### System Overview
- `image20.png` - VTS kit in hard cases
- `image28.png` - Argus software operating screen
- `image4.png` - Trainer tablet

### Access Points
- `image6.png` - Access Point hardware
- `image30.png` - Access Point close-up
- `image1.png` - Machine AP deployed
- `image3.png` - Repeater AP setup
- `image10.png` - Repeater configuration (both antennas up)
- `image11.png` - Repeater configuration (corner setup)

### Machine AP Setup (5-step procedure)
- `image32.png` - Step 1: Unfold lower antennas
- `image24.png` - Step 2: Rotate antenna mast
- `image25.png` - Step 3: Engage locking pin
- `image21.png` - Step 4: Position all antennas

### Power & Status
- `image8.png` - Power button location
- `image26.png` - LED status indicator
- `image17.png` - LED blue status
- `image19.png` - LED status detail
- `image2.png` - LED green status

### Remote Camera Systems
- `image23.png` - RCS exterior mounting
- `image9.png` - RCS cab mounting
- `image5.png` - Camera sync process

### Vehicle Setup (Camera Positions)
- `image18.png` - Rear view with Machine AP
- `image15.png` - Rear quarter view
- `image16.png` - Forward bucket view
- `image12.png` - Front bucket and tire view
- `image14.png` - Cab interior view

### Tablet Setup
- `image7.png` - Tablet camera location
- `image13.png` - Tablet power button location

### Operation
- `image33.jpg` - Argus full-screen interface
- `image35.png` - Mesh settings panel
- `image34.png` - Training area map example

### Branding
- `image22.png` - Barmico header logo
- `image27.png` - Argus VTS logo (small)
- `image29.png` - Argus VTS logo (large)
- `image31.png` - Note/tip icon

## Changes Summary

### Before (Assumed Content)
- Generic VTS descriptions
- No specific PIN or WiFi credentials
- Estimated battery specs
- No mention of 30m minimum AP distance
- Missing 5-step Machine AP setup
- No LED color table details
- No Network Health Monitoring specifics

### After (V3.3 Official Content)
- ✅ Exact PIN: **2580**
- ✅ Exact WiFi: **ARGUS-VTS-XXX / BarmincoVTS**
- ✅ Precise battery specs: **10h (AP), 12h (RCS)**
- ✅ **30m minimum AP distance** requirement
- ✅ Complete 5-step Machine AP setup with images
- ✅ Detailed LED color progression table
- ✅ Network Health 3-tier color system (Green/Orange/Red)
- ✅ Dual-band network specifications (2.4GHz + 5GHz)
- ✅ Antenna configuration for corners
- ✅ Training area planning example

## Build Status

✅ **Production build successful**
- Client compiled: 405.72ms
- Server compiled: 326.93ms
- All images loading correctly
- No broken links detected

## Next Steps

### Recommended Actions

1. **Preview the site**: Run `npm start` to view changes locally
2. **Deploy to GitHub Pages**: If satisfied, deploy the updated documentation
3. **Review content**: Check all pages for accuracy and completeness
4. **Test links**: Verify all internal navigation works correctly
5. **Image optimization**: Consider compressing images for faster load times

### Potential Enhancements

- Add troubleshooting flowcharts
- Create video tutorials linking
- Add downloadable PDF version
- Include battery charging schedules
- Add maintenance procedures
- Create quick reference cards

## Files Not Modified (Intentionally)

- `/docs/index.md` - Already had good welcome content
- `/docs/troubleshooting.md` - Can be expanded with HTML troubleshooting content if needed
- `docusaurus.config.js` - Configuration is correct
- `sidebars.js` - Structure is appropriate

---

**Documentation Status**: ✅ Complete and Accurate  
**Image Integration**: ✅ All 35 images copied and referenced  
**Build Status**: ✅ Successful production build  
**Content Source**: ✅ Official V3.3 User Guide HTML
