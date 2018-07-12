//input parameter regexp (string)
//return type Array/VC:VmFolder

//Get all Virtual Machine Folders for all vCenter connections defined for this plugin
var allVmFolders = VcPlugin.getAllVmFolders();
var VmFolders = new Array();
//Check if the VM Folder matches the regexp
for (var i in allVmFolders) {
  if (allVmFolders[i].name.match(regexp)) {
    VmFolders.push(allVmFolders[i]);
  }
}
return VmFolders;
