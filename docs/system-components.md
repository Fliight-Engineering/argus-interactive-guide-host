---
sidebar_position: 2
---

# System Components

## The Argus Software

Argus is a Windows-based software platform that gives remote trainers access to multiple video feeds from remote cameras. Users can toggle between feeds and record all streams simultaneously for later review and trainee coaching.

![Argus Software Operating Screen](/img/vts-guide/image28.png)

*Argus software operating screen, showing multiple live camera feeds*

### Key Features

- **Multiple Video Feeds** - Access to multiple video feeds from remote cameras
- **Quick Toggle** - Toggle between feeds in real-time with single click
- **Simultaneous Recording** - Record all streams simultaneously for later review
- **Post-Training Review** - Save recordings for trainee coaching and assessment
- **Network Health Monitoring** - Real-time visual status of mesh network connection quality

### Operation

The Argus software:
- Runs on the trainer's Windows tablet PC
- Connects wirelessly via the access point mesh network  
- Automatically connects to all 4 cameras once configured
- Provides intuitive touchscreen interface for easy control

## Access Points (Wireless Nodes)

Access points are wireless networking nodes that work together to create a mesh network.

![Access Point Hardware](/img/vts-guide/image6.png)

### Overview

Designed for reliable video streaming in underground or offline locations where standard Wi-Fi isn't available.

- **Mesh Network**: Multiple APs automatically connect to form a unified network
- **No Cables**: Purely wireless operation - no fixed infrastructure required
- **Automatic Configuration**: Self-organizing, dynamic mesh network
- **WiFi Range**: Up to 50 meters line of sight

### Types of Access Points

There are two types of access points in the system:

#### Machine Access Points
- Deployed on training vehicles
- Foldable antenna mast design for compact storage
- 5-step physical setup for deployment (see Setup & Operation section)
- Mounted on rear of vehicle (typically on top of radiator for loaders)

:::info Machine AP Setup
The Machine AP requires physical setup with mast deployment and antenna positioning. See the [Setup & Operation guide](./setup-operation/index.md) for the complete 5-step procedure with images.
:::

#### Repeater/Trainer Access Points  
- Positioned at strategic locations (trainer position, midpoints, corners)
- Magnetic feet for mounting to mesh or bolt plates
- Dual antenna configuration options for different coverage patterns

![Repeater Access Point](/img/vts-guide/image1.png)

*Repeater/Trainer Access Point with magnetic feet and dual antenna setup*

### Battery Life

- **Minimum 10 hours** of operation per battery
- Uses standard **18V, 6Ah Milwaukee battery packs**
- Swap batteries between training sessions for continuous operation

### Positioning & Deployment

- Position multiple Access Points throughout your training area
- Units automatically connect to form a mesh network
- No cables or fixed infrastructure required
- Can extend range with repeater access points

## Remote Camera Systems (RCS)

Portable video streaming cameras that quickly attach to training vehicles. No external power needed – fully wireless operation.

![Remote Camera System](/img/vts-guide/image23.png)

### Features

- **Portable Design** - Fully wireless, battery-powered operation
- **Magnetic Mounting** - Quickly attach to any metal surface on vehicle exterior
- **Adjustable Positioning** - Cameras can be adjusted to face any required position
- **Multiple Views** - Position cameras for required trainer visibility
- **Reliable** - Proven in underground mining operations

### Mounting Options

#### Exterior Mounting (Vehicle Monitoring)
- Mount magnetically to any metal surface on the exterior
- Position for required views for trainer to effectively see vehicle operation

![Exterior Mounting Example](/img/vts-guide/image23.png)

#### Interior Mounting (Cab/Trainee Monitoring)  
- Mount using suction cups on interior glass surfaces
- Position to capture trainee actions clearly

![Interior Cab Mounting](/img/vts-guide/image9.png)

### Battery Life

- Uses standard **12V/3Ah Milwaukee battery pack**
- **12 hours** of operation per charge  
- Plan recharging between training sessions
- Power button operation similar to Access Points

## Trainers Tablet

The trainers tablet connects to the access points to view camera feeds and save recordings.

![Trainers Tablet](/img/vts-guide/image4.png)

*Trainer tablet device showing the Windows-based interface*

### Capabilities

- **Live Video Viewing** - View camera feeds from all connected cameras
- **Multi-Stream Recording** - Record all video streams simultaneously
- **Network Monitoring** - Monitor mesh network health and connectivity status
- **System Control** - Manage system settings and configuration
- **Recording Management** - Access and playback saved recordings

### Specifications

- **Operating System**: Windows-based tablet PC
- **Display Orientation**: Landscape mode (cameras at top edge when horizontal)
- **Connectivity**: Built-in WiFi for mesh network connection
- **Interface**: Touchscreen for easy control
- **Login**: PIN-protected access (PIN: **2580**)

### WiFi Connection

**Network Name**: ARGUS-VTS-XXX* *(XXX is the kit number)*  
**Password**: BarmincoVTS

:::note
The tablet should automatically connect to the WiFi hotspot created by the trainer access point (AP-1). WiFi performance is excellent with a range of up to 50 meters line of sight.
:::

## Summary

| Component | Type | Power | Range | Key Benefit |
|-----------|------|-------|-------|-------------|
| Access Points | Wireless Nodes | 18V Battery | ~50m-200m* | Mesh network coverage |
| Cameras (RCS) | Video Capture | 12V Battery | Wireless | Multiple viewing angles |
| Tablet | Control Center | Battery | WiFi Range | View & record all feeds |
| Software | Application | Windows | N/A | Video management |

*Range depends on terrain and obstacles

---

**Next**: Learn about [Access Points](/docs/access-points) in detail.
