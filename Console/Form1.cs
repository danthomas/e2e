using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Console
{
    public partial class Form1 : Form
    {
        private readonly List<Thing> _things;

        public Form1()
        {
            InitializeComponent();

            _things = new List<Thing>
            {
                new Thing("node", "server.js"),
                new Thing("gulp", ""),
                new Thing(@"mongod.exe", "--dbpath=\"./db\"")
            };

            foreach (Thing thing in _things)
            {
                thing.Process = Process.GetProcessesByName(thing.FileName.Replace(".exe", "")).FirstOrDefault();
            }

            foreach (Thing thing in _things)
            {
                ListViewItem listViewItem = new ListViewItem { Text = thing.FileName, SubItems = { "" }, Tag = thing };
                listView1.Items.Add(listViewItem);
            }

            RefreshListView();
        }

        private void RefreshListView()
        {
            foreach (Thing thing in _things)
            {
                ListViewItem listViewItem = listView1.Items.Cast<ListViewItem>().Single(item => item.Tag == thing);

                listViewItem.SubItems[1].Text = thing.Process == null ? "Stopped" : "Started";
            }
        }
        
        private void startToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Thing thing = (Thing)listView1.SelectedItems[0].Tag;
            ProcessStartInfo processStartInfo = new ProcessStartInfo
            {
                WorkingDirectory = @"C:\Users\thomad\Documents\Visual Studio 2012\Projects\e2e\e2e",
                FileName = thing.FileName,
                Arguments = thing.Args,
                UseShellExecute = false,
                CreateNoWindow = true,
                RedirectStandardError = true,
                RedirectStandardOutput = true
            };

            thing.Process = Process.Start(processStartInfo);

            thing.Process.OutputDataReceived+= (o, args) =>
            {
                string s = args.Data;
            };

            RefreshListView();
        }

        private void restartToolStripMenuItem_Click(object sender, EventArgs e)
        {
            startToolStripMenuItem_Click(sender, e);
            stopToolStripMenuItem_Click(sender, e);
        }

        private void stopToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Thing thing = (Thing)listView1.SelectedItems[0].Tag;
            thing.Process.WaitForExit();
            thing.Process = null;
            RefreshListView();
        }

        private void contextMenuStrip1_Opening(object sender, CancelEventArgs e)
        {
            if (listView1.SelectedItems.Count == 1)
            {
                Thing thing = (Thing) listView1.SelectedItems[0].Tag;

                stopToolStripMenuItem.Enabled = thing.Process != null;
                startToolStripMenuItem.Enabled = thing.Process == null;
                restartToolStripMenuItem.Enabled = thing.Process != null;
            }
        }

        private void refreshToolStripMenuItem_Click(object sender, EventArgs e)
        {
            RefreshListView();
        }
    }

    class Thing
    {
        public Thing(string fileName, string args)
        {
            FileName = fileName;
            Args = args;
        }

        public string FileName { get; set; }
        public string Args { get; set; }
        public Process Process { get; set; }
    }
}
