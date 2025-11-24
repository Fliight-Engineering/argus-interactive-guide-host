---
sidebar_position: 4
---

# Operating the System

## VTS Operation Guidelines

This section provides best practice guidance for using the Argus VTS. If planned ahead, setup of the system should take around **5 minutes**.

### Minimum AP Distance

:::danger Critical Spacing Requirement
The **minimum distance** that two static AP's should be set up from one another is **30 meters** to avoid wireless noise affecting the streaming reliability.
:::

### Trainer/Repeater AP Positioning

When mounting these AP's on welded metal mesh, ensure that they are:

- **Not positioned in a wall depression** that would impact their line of sight to neighboring nodes
- **Ideally on the outermost point of a wall** for maximum signal propagation
- **At a minimum, mounted higher than the machine node** on the training vehicle

### Connection Monitoring

To monitor the connection after placing the AP/s:

1. **Check the Argus Application** (lower right corner) for network status
2. **Wait 1-2 minutes** — the network needs time to stabilize
3. **If performance is poor**, reposition the AP/s and repeat

### Trainer AP Distance

Deploy the trainer AP as far from the tablet as possible for the best operational coverage while:

- Maintaining line of sight to the tablet
- WiFi performance is excellent with range of up to 50 meters

:::tip Optimal Positioning
Trainer can monitor from a safer/more strategic distance while maintaining full system control.
:::

## Argus Tablet Operation

### Setup Connection

Connect the trainer tablet to WiFi network using:

- **WiFi Name**: `ARGUS-VTS-XXX*` *(XXX being the kit number)*
- **Password**: `BarmincoVTS`

:::info Already Configured
The Argus software will automatically connect to all 4 cameras — no setup required.
:::

### Argus Software Interface

![Argus Full Screen View](/img/vts-guide/image33.jpg)

*Argus software full-screen view showing multiple camera feeds and control interface*

Once connected, the four camera feeds will start streaming automatically. The interface provides:

1. **Start recording** all connected camera feeds to the specified folder (Settings/Recording/Directory)
2. **Quick camera view adjustment button** for rapid feed switching
3. **Open the recording directory folder** in Explorer
4. **Application Settings** for system configuration
5. **Expand and close application buttons** for interface control
6. **Network Health Monitoring Panel** showing real-time connection quality

## Recording

### Starting a Recording

To record all connected camera feeds:

1. **Locate the Record Button** - Typically at the top of the interface
2. **Specify Save Location** - Settings → Recording → Directory
3. **Press Record** - Recording indicator shows active status
4. **All Feeds Recorded** - All connected cameras record simultaneously

### Stopping Recording

1. **Press Stop Button** - Ends active recording
2. **Files Saved Automatically** - All video files save to recording directory
3. **Ready for Playback** - Use Argus or external media player for review

### Recording Best Practices

✅ Set recording folder before deployment  
✅ Ensure adequate storage space (plan 100MB+ per hour)  
✅ Label recordings with date and trainee name  
✅ Back up important recordings  

## Camera View Control

### Camera View Control

**To view a camera feed full-screen**: Double-tap any sidebar video

The camera feed will maximize to fill the entire screen for detailed observation. Tap again to return to multi-view mode with all four feeds visible.

### Camera Organization

Cameras appear in sidebar in connection order:

1. **Camera 1** - Usually rear exterior
2. **Camera 2** - Usually front exterior
3. **Camera 3** - Usually side exterior
4. **Camera 4** - Usually cab interior

Rearrange by adjusting mesh alias names in Settings → Mesh.

## File Management

### Accessing Recorded Videos

1. **Open Recording Directory** - Use "Open Recording Directory" button in interface
2. **File Explorer** - Shows all recorded video files
3. **File Names** - Typically show timestamp and camera number

### Recording Directory

- **Default Location**: Specified in Settings → Recording → Directory
- **Typical Path**: C:\Recordings\ or internal tablet storage
- **Access**: Use File Explorer or Argus software button

### Exporting Videos

- Download to external drive for archival
- Transfer to laptop for editing or review
- Share for coaching or training purposes

## Network Health Monitoring Panel

The network health monitoring panel provides a simple and intuitive means of assessing live network performance.

### Monitoring Panel Location

Located in **lower right corner** (item #6) of Argus software interface.

### Health Indicators

For both network bands (**wlan0**: 2.4GHz and **wlan1**: 5GHz), cost values are reported with color indicators:

| Indicator Color | Network State | Meaning | Action Required |
|-----------------|---------------|---------|-----------------|
| 🟢 **Green** | Optimal | Excellent connection quality, video streaming reliable | Continue operation normally |
| 🟠 **Orange** | Functional | Connection working but not optimal | Monitor, may need AP repositioning |
| 🔴 **Red** | Poor | Significant connection issues | Stop and reposition APs immediately |

### Network Band Naming

![Mesh Settings](/img/vts-guide/image35.png)

*Mesh settings showing node aliases for improved usability*

By default, the system will display node IP address `[10.177.154.x]` of the connected nodes on the mesh network. The **"Mesh" tab in the Argus settings menu** allows a user to set an Alias for each node to improve usability:

- Rename nodes to meaningful names (e.g., "Machine AP", "Trainer AP", "Repeater 1")
- Easier identification in Network Health Monitoring Panel
- Simplifies troubleshooting and system management

### Taking Action on Poor Status

- **Orange**: Monitor carefully, be prepared to reposition
- **Red**: Stop deployment, investigate and reposition APs

### Extending Coverage Around Corners

To extend the coverage of the VTS around corners:

![Repeater AP Antenna Configurations](/img/vts-guide/image10.png) ![Repeater AP Corner Configuration](/img/vts-guide/image11.png)

*Left: Both antennas up for max direct range down a long drive run  
Right: One antenna up and the other down, to provide signal around a corner*

1. **Position Trainer or Repeater AP at the corner**
2. **Orient the two antennas strategically**:
   - **Antenna 1**: Toward the vehicle travel path (provides coverage)
   - **Antenna 2**: Back to the previous static AP with clear line of sight (maintains network connection)

This configuration allows the system to "bend" around corners and extend coverage into areas without direct line of sight.

### Level Setup for Training

![Training Area Map](/img/vts-guide/image34.png)

*Example: Map of training area, showing trainer position, AP locations, and bogging work locations*

To plan training with the VTS:

- **Trainer position** situated out of the way of travel of the loader
- **Trainer AP and Repeater AP locations** shown positioned down a long run and around a corner
- Significant operational range can be achieved by following the setup instructions in this guide

### AP/RCS Power On Troubleshooting

If the AP or RCS does not seem to be powering on:

1. Ensure you are doing so with a **single firm press-and-release**
2. Give the unit time to boot after that action (10-15 seconds for initialization)
3. Watch for LED status changes
4. If still no response, check battery is installed and charged

### Connection Troubleshooting

If showing poor connection (red or orange indicators):

1. Verify all APs show green LED status
2. Check line of sight between APs
3. Verify minimum **30m spacing** between static APs
4. Reposition AP at corner or midpoint if needed
5. Move cameras closer to nearest AP if possible
6. Wait 1-2 minutes after repositioning for network to stabilize

## Best Practices

✅ **Monitor network health continuously**  
✅ **Test all feeds before trainee starts**  
✅ **Position trainer away from operational hazards**  
✅ **Have backup recording storage available**  
✅ **Verify video quality before relying on system**  
✅ **Save recordings immediately after session**  

---

**Next**: [Troubleshooting Guide](/docs/troubleshooting)
